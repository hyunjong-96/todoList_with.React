export default function createAsyncDispatcher(type,promiseFn){
    const SUCCESS = `${type}_SUCCESS`
    const ERROR = `${type}_ERROR`

    async function actionHandler(dispatch, ...rest){
        dispatch({type}) //요청시작됨.
        try{
            const data = await promiseFn(...rest)
            dispatch({
                type:SUCCESS,
                data
            })
        }catch(err){
            dispatch({
                type:ERROR,
                error:err
            })
        }
    }

    return actionHandler
}