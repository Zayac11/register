export const authAPI = {
    login(requestOptions) {

        return (
            fetch("http://127.0.0.1:8000/auth/jwt/create/", requestOptions)
                .then(response => response.json())
        )
    },
    getClasses(requestOptions) { //Метод для показа всех доступных классов

        return(
            fetch('http://127.0.0.1:8000/api/my_classes', requestOptions)
                .then(response => response.json())
        )
    },
    getStatus(requestOptions) {
        return(
            fetch('http://127.0.0.1:8000/api/get_status', requestOptions)
                .then(response => response.json())
        )
    }
}

export const taskAPI = {
    getTask(requestOptions,taskId){
        return fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, requestOptions)
            .then(response => response.json())
    },
    deleteTask(requestOptions, taskId){
        return fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/delete`, requestOptions)
    },
    addTask(requestOptions, sprintId){
        return fetch(`http://127.0.0.1:8000/api/blocks/${sprintId}/new_task`, requestOptions)
    },
    updateTask(requestOptions, taskId){
        return fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/change`, requestOptions)
    }
    // sendCode(requestOptions, taskId) {
    //     return fetch(`http://127.0.0.1:8000/api/tasks/${Math.floor(taskId)}/send_code`, requestOptions)
    //         .then(response => {
    //             console.log(response)
    //             console.log((response.json()))
    //         })
    // }
}

export const sprintAPI = {
    getSprints(requestOptions, sprintId){ //Гет запрос на получение спринтов
        return fetch(`http://127.0.0.1:8000/api/classes/${sprintId}/`, requestOptions)
            .then(response => response.json())
    },
    addSprint(requestOptions, classId) { //добавление спринта по id класса
        return fetch(`http://127.0.0.1:8000/api/classes/${classId}/new_block`, requestOptions)
    },
    updateSprint(requestOptions, sprintId) { //Изменение имени Спринта(блока) по id
        return fetch(`http://127.0.0.1:8000/api/blocks/${sprintId}/change`, requestOptions)
    },
    deleteSprint(requestOptions, sprintId) { //Удаление спринта по его id
        return fetch(`http://127.0.0.1:8000/api/blocks/${sprintId}/delete`, requestOptions)
    },

}

export const accountApi = {
    getUserData(requestOptions) {
        return fetch(`http://127.0.0.1:8000/api/lk`, requestOptions)
            .then(response => response.json())
    },
    // changePassword(requestOptions) {
    //     return fetch(`http://127.0.0.1:8000/auth/users/set_password/`, requestOptions)
    //         .then(response => {
    //             debugger
    //             response.json()
    //         })
    // },

}
