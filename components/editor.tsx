// components/QuillEditor.js
import { SetStateAction, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill with no SSR (server-side rendering)
// Quill requires window, so we disable SSR for this component
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

import 'react-quill/dist/quill.snow.css'; // import styles for the editor

const QuillEditor = () => {
    const [editorContent, setEditorContent] = useState('');

    const handleChange = (value: SetStateAction<string>) => {
        setEditorContent(value);
    };

    return (
        <div>
            <ReactQuill
                value={editorContent}
                onChange={handleChange}
                className="bg-white dark:bg-slate-200 dark:text-slate-900 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 p-4"
            />
        </div>
    );
};

export default QuillEditor;
