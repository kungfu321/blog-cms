function Posts() {
    return (
        <div>hello post</div>
    )
}

const fetcher = (...args) => fetch(...args).then(res => res.json())
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetcher('/api/themes')

    const data = await res.json()
    console.log(data)

    // Pass data to the page via props
    return { props: { data } }
}

export default Posts
