import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '../../redux/reducers/authReducer'
import { SelectModel } from '../../models/SelectModel'
const initValues = {
    title: '',
    description: '',
    locationTilte: '',
    locationAddress: '',
    position: {
        lat: '',
        long: '',
    },
    photoUrl: '',
    users: [],
    authorId: '',
    startAt: Date.now(),
    endAt: Date.now(),
    date: Date.now(),
    price: '',
    category: '',


}
const AddNewScreen = ({ navigation }: any) => {
    const auth = useSelector(authSelector);
    const [eventData, setEventData] = useState({
        ...initValues,
        authorId: auth.id
    });
    const [usersSelects, setUsersSelects] = useState<SelectModel[]>([]);


    return (
        <View>
            <Text>AddNewScreen</Text>
        </View>
    )
}

export default AddNewScreen