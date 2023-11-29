import {getMeta} from "@/utilities/meta";
import {NotFound} from "@/layout/screens/notFound/notFound";

export const metadata = getMeta("Не найдено 404", 'Эта страница не существует, перейдите на основную. 404 error')

function Page() {
    return (
        <>
            <NotFound/>
        </>
    )
}
export default Page