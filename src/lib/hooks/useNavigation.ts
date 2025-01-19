import { useContext } from 'react'
import { NavigationContext } from '../context/navigationContext'

export const useNavigation = () => {
    return useContext(NavigationContext)
}
