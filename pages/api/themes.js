export default (req, res) => {
    res.statusCode = 200
    res.json({ data: "<div>change themes</div>", themeId: 2 })
}
