import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente <AddCategory />', () => { 

    const setCategory = jest.fn()
    let wrapper = shallow ( <AddCategory setCategories={setCategory}/>)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow ( <AddCategory setCategories={setCategory}/>)

    })

    test('debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input')
        const value = 'hola mundo'
        input.simulate('change', { target: { value} });
    })

    test('No debe de postear la informacion onSubmit', () => { 
         
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategory).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategory y limpiar la caja de texto', () => { 
          const input = wrapper.find('input')
          input.simulate('change', { target: { value : 'Goku'}})
          //console.log(wrapper.find('input').prop('value'));
          wrapper.find('form').simulate('submit', {preventDefault(){}});
          expect(setCategory).toHaveBeenCalledTimes(1)
          const inputValue = wrapper.find('input').prop('value')
          expect(inputValue).toBe('')
    })

 })