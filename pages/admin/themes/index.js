import useSWR from 'swr'
import { NextSeo } from 'next-seo';
import Theme from '../../../components/themes/theme1';
import dynamic from 'next/dynamic'

export default function Themes(props) {
    // const { data } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher, { initialData: props.data })
    const { data, error } = useSWR('/api/themes', fetcher, { initialData: props.data })
    const DynamicThemes = dynamic(() => import(`../../../components/themes/theme${data.themeId}`), {
        ssr: false,
    })
    // console.log(data)
    return (
        <div>
            {/* <NextSeo
                title={data[0].title}
                description={data[0].body}
            />
            {
                data.map(element => <div key={element.id}>{element.title}</div>)
            } */}
            <div className="text-container" dangerouslySetInnerHTML={{ __html: data.data }} />
            <DynamicThemes />
        </div>
    )
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetcher('http://localhost:3000/api/themes')

    // const data = await res.json()
    console.log('res', res)

    // Pass data to the page via props
    return { props: { data: res } }
}
