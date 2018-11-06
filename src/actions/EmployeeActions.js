import firebase from 'firebase'
import { EMPLOYEE_UPDATE } from './types'
import { Actions } from 'react-native-router-flux'

export const employeeUpdate = ({ prop, value}) => {
    return {
        type:  EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    
}

