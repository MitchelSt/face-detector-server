const handleImagePut = (db) => (req, res) => {
    const { id } = req.body
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])    
    })
    .catch(error => res.status(400).json('error getting entries'))
}


module.exports = {
    handleImagePut: handleImagePut
}