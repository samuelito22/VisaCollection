import React from 'react';

interface SearchInputProps {
  placeholder: string;
  icon: JSX.Element; // Allows passing SVG icons
  focusRef: React.RefObject<HTMLInputElement>; // For focusing the input
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, icon, focusRef }) => {
  return (
    <div className='max-w-[350px] w-screen h-12 flex' onClick={() => focusRef.current?.focus()}>
      <div className="w-16 flex justify-center items-center">
        {icon}
      </div>
      <input
        ref={focusRef}
        type="text"
        name="search"
        className="pr-3 py-2 w-full h-full bg-white focus:ring-0 focus:border-none font-light text-gray-700 " 
        placeholder={placeholder}
        style={{ border: 'none', outline: 'none' }}
      />
    </div>
  );
};


export function Search() {
    const firstInputRef = React.useRef<HTMLInputElement>(null);
    const secondInputRef = React.useRef<HTMLInputElement>(null);

    const firstIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
        </svg>
    );

    const secondIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
            <path d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    );

    return (
            <div className='border border-gray-400 shadow-md rounded-md flex flex-col sm:flex-row overflow-hidden p-2'>
                <SearchInput 
                    placeholder="Industry, company, keywords."
                    icon={firstIcon}
                    focusRef={firstInputRef}
                />
                <SearchInput 
                    placeholder="Another search"
                    icon={secondIcon}
                    focusRef={secondInputRef}
                />
                <button className='btn btn-neutral m-auto w-full sm:w-auto '>Find companies</button>
            </div>
    );
}