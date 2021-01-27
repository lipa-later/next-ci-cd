import {shallow} from 'enzyme'
import Index from './index'
import  renderer from "react-test-renderer"
describe('Welcome Message using the Enzyme assertion approach', ()=>{
    it('Renders "Next.js"', ()=>{
        const app = shallow(<Index/>)
        expect(app.find('h1').text()).toContain("Next.js")

    })
})
describe('Welcome Message using the Jest Snapshot approach', ()=>{
    it('Renders "Next.js"', ()=>{
        const component = renderer.create(<Index/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()

    })
})