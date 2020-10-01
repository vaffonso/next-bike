import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import data from '../motorcyles';
import ShowCase from '../components/ShowCase/ShowCase';

export default function Home() {
    const test = data[data.length - 1];
    return (
        <div>
            <ShowCase imagePath={test.images[0]} model={test.model} />
        </div>
    );
}
