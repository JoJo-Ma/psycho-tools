import React, {
    useEffect, useRef, useState, useMemo,
} from 'react';
import {
    Sprite, Text, Graphics, Container, Stage,
    useTick,
} from '@pixi/react';
import * as PIXI from 'pixi.js';
import { useSettingsContext } from '../Contexts/SettingsContext';
import { usePlayContext } from '../Contexts/PlayContext';
import circle from '../assets/circle.svg';

const width = 1500;
const height = 600;

function Canvas() {
    const [x, setX] = useState(width / 2);
    const [y, setY] = useState(height / 2);
    const [moveRight, setMoveRight] = useState(-1);
    const [crossed, setCrossed] = useState(0);

    const {
        backgroundColor,
        shapeColor,
        shapeType,
        shapeSize,
        movement,
        shapeSpeed,
        count,
    } = useSettingsContext();

    const circleTexture = useMemo(() => PIXI.Texture.from(circle, {
        resourceOptions: {
            scale: shapeSize / 100,
        },
    }), [shapeSize]);

    const {
        playing,
        setPlaying,
        currentCount,
        setCurrentCount,
    } = usePlayContext();

    useEffect(() => {
        const ticker = new PIXI.Ticker();

        ticker.add((delta) => {
            if (playing) {
                if (movement === 'left-right') {
                    let revert = moveRight;
                    if (moveRight === -1) {
                        if (x < 0) {
                            revert = 1;
                        }
                        if ((x - shapeSize / 4) < (width / 2)
                        && crossed % 2 === 0) {
                            setCrossed((prev) => prev + 1);
                        }
                    } else {
                        if (x > width) {
                            revert = -1;
                        }
                        if ((x + shapeSize / 4) > (width / 2)
                        && crossed % 2 === 1) {
                            setCrossed((prev) => prev + 1);
                        }
                    }
                    setX((prevX) => {
                        return prevX + (delta + shapeSpeed) * revert;
                    });
                    setMoveRight(revert);
                }
            }
        });

        ticker.start();

        return () => {
            ticker.stop();
            ticker.destroy();
        };
    }, [playing, movement, shapeSpeed, x, moveRight]);

    useEffect(() => {
        if (crossed % 2 === 1 && crossed !== 1) {
            setCurrentCount(prev => prev + 1);
        }
    }, [crossed, count, setPlaying, setCurrentCount]);

    useEffect(() => {
        if (currentCount === 0) {
            setX(width / 2);
        }
    }, [currentCount]);

    useEffect(() => {
        console.log(backgroundColor);
    }, [backgroundColor]);

    useEffect(() => {
        console.log(playing);
    }, [playing]);

    return (
        // <Container>
        <Stage
            width={1500}
            height={600}
            options={{
                backgroundColor: 0xF1E1F1,
                antialias: true,
                autoDensity: true,
                resolution: window.devicePixelRatio || 1,
            }}
        >
            <Graphics
                draw={(graphics) => {
                    // draw a shape
                    graphics.clear();
                    graphics.beginFill(backgroundColor);
                    graphics.drawRect(0, 0, width, height);
                    graphics.endFill();
                }}
            />
            <Container>
                {
                    shapeType === 'circle' ? (
                        <Sprite
                            texture={circleTexture}
                            position={[x, y]}
                            anchor={{
                                x: 0.5,
                                y: 0.5,
                            }}
                            tint={shapeColor}
                            alpha={1}
                            scale={shapeSize / 100}
                        />
                    ) : (
                        <Graphics
                            draw={(graphics) => {
                                graphics.clear();
                                graphics.beginFill(shapeColor);
                                graphics
                                    .drawRect(-shapeSize, -shapeSize,shapeSize * 2, shapeSize * 2);
                                graphics.endFill();
                            }}
                            x={x}
                            y={y}
                            anchor={0.5}
                        />
                    )
                }
            </Container>
            <Text
                text={`Count: ${currentCount}`}
                x={50}
                y={50}
            />
        </Stage>
        // </Container>
    );
}

export default Canvas;
