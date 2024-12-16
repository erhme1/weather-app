export function Searchinput({search, onChangeText, onPressEnter}) {
  return (
    <div className="w-[580px] h-[80px] bg-[#ffffff] rounded-[48px] flex  items-center gap-[24px] z-30 text-black mr-[200px]">
      <img className="opacity-20 ml-[24px]" src="Search.png" />
      <input
        type="search"
        placeholder="Search city..."
        className="focus:outline-none border-none h-[60px] w-[350px]"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      ></input>
    </div>
  );
}
export function Circle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#ffffff] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function CircleGray({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#111827] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function Square({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-[#0F141E] z-10 rounded-[36px] absolute"
    ></div>
  );
}
export function WhiteSquare({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 absolute"
    ></div>
  );
}
 
export function MidCircle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 rounded-full absolute"
    ></div>
  );
}