// import { useMemo, useState } from "react";

// const Categories = () => {
//   const [count, setCount] = useState(15);
//   const [color, setColor] = useState(false);

//   const style = {
//     color: color ? "black" : "red",
//   };

//   function strong(num) {
//     console.log("вызов!");
//     let i = 0;
//     while (i < 1000000000) i++;
//     return num * 2;
//   }

// const myFunc = strong(count);
//   const myFunc = useMemo(() => {
//     return strong(count);
//   }, [count]);
//   return (
//     <>
//       <h1 style={style}>Колличество {myFunc}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>Уменьшить</button>
//       <button onClick={() => setColor((prev) => !prev)}>Изменить</button>
//     </>
//   );
// };
// export default Categories;

const Categories = () => {
  return <h1>Categories</h1>;
};

export default Categories;
