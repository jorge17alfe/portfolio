const a = ({...d})=>{
    return d.cc.aa
}
 
let g = {aa:"jorge", bb:"luis",}
 g.cc= {aa:"jorge", bb:"luis",}
console.log(a(g))