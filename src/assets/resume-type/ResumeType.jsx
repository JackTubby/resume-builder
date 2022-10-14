import ResumeOptions from './ResumeOptions'
// Import data containing resume options
import data from './resumeOptionsData'

function resumeType() {

    const options = data.map(option => {
        return (
            <ResumeOptions key={option.id} {...option} />
        )
    })

    return (
        <div>
           {options}
        </div>
    )
}

export default resumeType