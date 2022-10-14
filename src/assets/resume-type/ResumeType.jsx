import ResumeOptions from './ResumeOptions'
import './resumeType.css'
// Import data containing resume options
import data from './resumeOptionsData'

function resumeType() {

    const options = data.map(option => {
        return (
            <ResumeOptions key={option.id} {...option} />
        )
    })

    return (
        <div className='options--wrapper'>
           {options}
        </div>
    )
}

export default resumeType