const enabled = process.env.use_jivo_metrika && process.env.jivo_id

export const Jivo = () => {
    if (!enabled){
        return null
    }
    return (
        <script src="//code.jivo.ru/widget/FO88DaS6F1" async></script>
    )
}