import {
    storyblokEditable,
    } from '@storyblok/react/rsc';
    
    export default function BlogPost({ blok }) {
        const titleClass = "text-2xl font-bold";
    return (
        <main {...storyblokEditable(blok)}>
            <h1 className={titleClass}>{blok?.title}</h1>
        </main>
    );
    }