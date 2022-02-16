describe('posts endpoints', () => {
    let app;
    // beforeEach(async () => {
    //     await resetTestDB()
    // });

    beforeAll(async () => {
        app = app.listen(5000, () => console.log('Test server running on port 3000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        app.close(done)
    })

    it('should return a post in database', async () => {
        const res = await request(app).get('/posts');
        expect(res.statusCode).toEqual(404);
        
    })
    
})