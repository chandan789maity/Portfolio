import React from 'react';

interface ProjectButtonProps {
  children: React.ReactNode;
}

const ProjectButton: React.FC<ProjectButtonProps> = (props) => {
  return (
    <button className="mx-2 max-sm:mx-1 mb-1 relative inline-flex overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-rose-700">
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 p-2 max-sm:p-1 px-4 text-sm font-medium text-white backdrop-blur-3xl max-sm:px-2 max-sm:text-xs max-sm:text-[10px] ">
        {props.children}
      </span>
    </button>
  );
};

export default ProjectButton;

