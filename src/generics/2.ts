type AllType = {
name: string;
position: number;
color: string;
weight: number
}

function compare<T extends keyof AllType>( 
    top: Pick<AllType, T>,
    bottom: Pick<AllType, T> ): AllType {
 return {
name: top.name as string,
color: top.color as string,
position: bottom.position as number,
weight: bottom.weight as number,
}
}

// const result = compare(
//   { name: "list", color: "black" },
//   { position: 10, weight: 200 }
// );

// console.log(result);
