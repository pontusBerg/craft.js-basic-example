"use client"
import React, { useRef, useState } from 'react'
import { Text } from './Text';
import { Button } from './Button';
import { Element, useEditor, useNode } from '@craftjs/core';
import { Container } from './Container';

interface Props { }

function Hero(props: Props) {
    const { } = props
    const {
        connectors: { connect },
    } = useNode((node) => ({
        selected: node.events.selected,
    }));



    return (
        <div className='hero'>
            <Element background='none' padding='none' id="hero" is={Container} canvas>
                <Text data-cy="card-top-text-1" fontSize={64} text="Create kickass websites in less than a minute" />
                <Text fontSize={20} text="Hi world" />
                <Button>
                    Learn more
                </Button>
            </Element>
        </div>
    )
}

export default Hero
