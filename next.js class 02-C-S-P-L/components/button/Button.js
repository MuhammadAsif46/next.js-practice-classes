
export default function Button({children,click}) {
    return (
        <button onClick={click}>
            {children}
        </button>
    )

};

// export default function Button ({name}) {
//     return (
//         <div>
//             <button>{name}</button>
//         </div>
//     )
// }