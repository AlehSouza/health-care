import api from "@/services/api"

const zipCode = async ( target: any) => {
    if (target.value.length < 9) return
    try {
        const { data: res } = await api.get(
            `https://viacep.com.br/ws/${target.value}/json/`
        )
        return res
    } catch (err) {
        console.error(err)
    }
}

export default zipCode