import moment from 'moment'

const fromDate = () => {
   return moment().format('YYYY-MM-DD'+' '+'HH:mm:ss')
}

export default fromDate