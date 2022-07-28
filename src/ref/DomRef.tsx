import { useRef, useEffect } from "react";

interface DomRefProps {}

const DomRef: React.FunctionComponent<DomRefProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="bg-black text-white rounded-lg focus:outline-none ml-5 px-3 py-1"
      />
    </div>
  );
};

export default DomRef;
