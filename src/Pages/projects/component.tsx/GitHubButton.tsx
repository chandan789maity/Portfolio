import React from 'react';

interface GithubButtonProps {
  children?: React.ReactNode;
  githublink: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ githublink }) => {
  return (
    <a href={githublink}>
      <button className=" mt-3 mx-2 max-sm:mx-1 mb-1 relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black p-2 max-sm:p-1 px-4 text-sm font-medium text-white backdrop-blur-3xl max-sm:px-2 max-sm:text-xs max-sm:text-[10px] ">
          GitHub Code
        </span>
      </button>
    </a>
  );
};

export default GithubButton;
