

// const Typescript = () => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg"
//             width="40px"
//             height="35px"
//             aria-label="TypeScript" role="img"
//             viewBox="0 0 512 512"><rect
//                 width="512" height="512"
//                 rx="15%"
//                 fill="#3178c6" /><path
//                 fill="url(#a)"
//                 fillRule="evenodd"
//                 d="M13.016 2C10.82 2 9.038 3.725 9.038 5.852v2.667h6.886v.74H5.978C3.781 9.26 2 10.984 2 13.111v5.778c0 2.127 1.781 3.852 3.978 3.852h2.295v-3.26c0-2.127 1.781-3.851 3.978-3.851h7.345c1.859 0 3.366-1.46 3.366-3.26V5.852C22.962 3.725 21.18 2 18.984 2h-5.968Zm-.918 4.74c.76 0 1.377-.596 1.377-1.333 0-.736-.616-1.333-1.377-1.333-.76 0-1.377.597-1.377 1.333 0 .737.617 1.334 1.377 1.334Z"
//                 clipRule="evenodd"
//             />
//             <path
//                 fill="url(#a)"
//                 d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
//             />
//             <path
//                 fill="url(#b)"
//                 d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
//             />
//             <defs>
//                 <linearGradient
//                     id="a"
//                     x1={19.075}
//                     x2={34.898}
//                     y1={18.782}
//                     y2={34.658}
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <stop stopColor="#387EB8" />
//                     <stop offset={1} stopColor="#366994" />
//                 </linearGradient>
//                 <linearGradient
//                     id="b"
//                     x1={28.809}
//                     x2={45.803}
//                     y1={28.882}
//                     y2={45.163}
//                     gradientUnits="userSpaceOnUse"
//                 >
//                     <stop stopColor="#FFE052" />
//                     <stop offset={1} stopColor="#FFC331" />
//                 </linearGradient>
//             </defs></svg>
//     )
// }

// export default Typescript

import * as React from "react"
import { SVGProps } from "react"
const TypeScript = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="70px"
        height="50px"
        // viewBox="0 0 400 200"
    viewBox="0 0 32 32" {...props}>
        <defs>
            <linearGradient
                id="a"
                x1={-133.268}
                x2={-133.198}
                y1={-202.91}
                y2={-202.84}
                gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0} stopColor="#387eb8" />
                <stop offset={1} stopColor="#366994" />
            </linearGradient>
            <linearGradient
                id="b"
                x1={-133.575}
                x2={-133.495}
                y1={-203.203}
                y2={-203.133}
                gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0} stopColor="#ffe052" />
                <stop offset={1} stopColor="#ffc331" />
            </linearGradient>
        </defs>
        <title>{"file_type_python"}</title>
        <path
            d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712Zm-3.732 2.137a1.214 1.214 0 1 1-1.183 1.244v-.02a1.214 1.214 0 0 1 1.214-1.214Z"
            style={{
                fill: "url(#a)",
            }}
        />
        <path
            d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04Zm3.732-2.147A1.214 1.214 0 1 1 21 26.519v.03a1.214 1.214 0 0 1-1.214 1.214h.03Z"
            style={{
                fill: "url(#b)",
            }}
        />
    </svg>
)
export default TypeScript
