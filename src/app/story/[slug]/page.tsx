import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import imageIcon from '../../../../public/image.svg';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'stories_data', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl">Story Not Found</h1>
      </div>
    );
  }

  const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const addLineBreaks = (text: string): React.JSX.Element[] => {
    return text.split('\n').map((part, index) => (
      <span key={index}>
        {part}
        {index < text.split('\n').length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </span>
    ));
  };

  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 m-auto w-7/12 h-[64rem] p-8 rounded-lg shadow-lg text-white overflow-y-scroll max-h-screen">
      <Link
        href="/stories"
        className="mt-4 text-neutral-600 underline hover:text-neutral-600 hover:scale-105 hover:opacity-90 transition"
      >
        ← Back
      </Link>

      <h1 className="text-3xl font-bold my-2 text-center text-foreground">
        {fileContent.title}
      </h1>

      <p className="text-neutral-400 italic text-center my-2">
        By {fileContent.author}
      </p>

      <hr className="text-gray-500" />

      <div className="flex h-full w-full mb-24">
        <div className="min-w-1/2 h-full m-4 flex justify-center">
          {fileContent.images && fileContent.images.length > 0 ? (
            <Image
              src={fileContent.images[0]}
              alt="Image"
              width={400}
              height={400}
              className="rounded-lg h-full w-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center bg-neutral-200 dark:bg-neutral-700 rounded-lg h-full w-full">
              <Image
                src={imageIcon}
                alt="Image"
                width={300}
                height={300}
                className="invert-50 w-24 h-24"
              />
            </div>
          )}
        </div>
        <div>
          <p className="text-foreground my-4">
            {addLineBreaks(fileContent.content)}
          </p>

          {fileContent.source && (
            <p className="mt-2 font-[eczar] font-semibold py-8">
              Source:{' '}
              <a
                href={fileContent.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline font-normal"
              >
                {fileContent.source}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
