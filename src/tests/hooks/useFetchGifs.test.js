import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas con el hook useFetchGifs', () => { 

    const category = 'Dragon ball'
    test('Denbe retornar el estado inicial', async () => { 
        //Install npm install --save-dev @testing-library/react-hooks
        //para pribar hooks
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs( category ))
        const {data,loading} = result.current
        await waitForNextUpdate()
        console.log(data, loading)

        expect(data).toEqual([])
        expect(loading).toEqual(true)
     }) 

    test('debe de retornar un arreglo de imagenes y loading en false', async() => { 
       
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs( category ))
        await waitForNextUpdate()
        const {data,loading} = result.current
        expect(data.length).toEqual(10)
        expect(loading).toEqual(false)

    })

     
 })