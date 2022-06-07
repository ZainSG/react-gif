import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'
describe('Prubas con el componente <GifExpertApp/>', () => { 
    const wrapper = shallow(<GifExpertApp/>)
    test('Deeberia renderizar el componente adecuadaamente', () => { 
        expect(wrapper).toMatchSnapshot()
     })
 })