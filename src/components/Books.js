import React, {Component} from 'react';
import axios from 'axios';
import {Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button} from 'reactstrap';


export class Pushing extends Component {
    state = {
        books: [],
        newBookData: {
            title: '',
            rating: '',
            author: '',
            category: '',
            isbn: '',

        },
        editBookData: {
            id: '',
            title: '',
            author: '',
            category: '',
            isbn: ''
        },
        newBookModal: false,
        editBookModal: false
    }

    componentWillMount() {
        this._refreshBooks();
    }

    toggleNewBookModal() {
        this.setState({
            newBookModal: !this.state.newBookModal
        });
    }

    toggleEditBookModal() {
        this.setState({
            editBookModal: !this.state.editBookModal
        });
    }

    addBook() {
        axios.post('http://localhost:3000/posts', this.state.newBookData).then((response) => {
            let {books} = this.state;

            books.push(response.data);

            this.setState({
                books, newBookModal: false, newBookData: {
                    title: '',
                    author: '',
                    category: '',
                    isbn: ''
                }
            });
        });
    }

    updateBook() {
        let {
            title,
            author,
            category,
            isbn
        } = this.state.editBookData;

        axios.put('http://localhost:3000/posts/' + this.state.editBookData.id, {
            title, author, category, isbn
        }).then((response) => {
            this._refreshBooks();

            this.setState({
                editBookModal: false, editBookData: {id: '', title: '', author: '', category: '', isbn: ''}
            })
        });
    }

    editBook(id, title, author, category, isbn) {
        this.setState({
            editBookData: {id, title, author, category, isbn}, editBookModal: !this.state.editBookModal
        });
    }

    deleteBook(id) {
        axios.delete('http://localhost:3000/posts/' + id).then((response) => {
            this._refreshBooks();
        });
    }

    _refreshBooks() {
        axios.get('http://localhost:3000/posts').then((response) => {
            this.setState({
                books: response.data
            })
        });
    }

    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.isbn}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2"
                                onClick={this.editBook.bind(this, book.id, book.title, book.author, book.category, book.isbn)}>Edit</Button>
                        <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="App container">

                <h1>Books App</h1>

                <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>

                <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
                                let {newBookData} = this.state;

                                newBookData.title = e.target.value;

                                this.setState({newBookData});
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"author"}>Author</Label>
                            <Input id={"author"} value={this.state.newBookData.author} onChange={(e) => {
                                let {newBookData} = this.state;
                                newBookData.author = e.target.value;
                                this.setState({newBookData})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"category"}>Category</Label>
                            <Input id={"category"} value={this.state.newBookData.category} onChange={(e) => {
                                let {newBookData} = this.state;
                                newBookData.category = e.target.value;
                                this.setState({newBookData})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"isbn"}>ISBN</Label>
                            <Input id={"isbn"} value={this.state.newBookData.isbn} onChange={(e) => {
                                let {newBookData} = this.state;
                                newBookData.isbn = e.target.value;
                                this.setState({newBookData})
                            }}/>
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit a new book</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" value={this.state.editBookData.title} onChange={(e) => {
                                let {editBookData} = this.state;

                                editBookData.title = e.target.value;

                                this.setState({editBookData});
                            }}/>
                            <Label for={"author"}>Author</Label>
                            <Input id={"author"} value={this.state.editBookData.author} onChange={(e) => {
                                let {editBookData} = this.state;

                                editBookData.author = e.target.value;

                                this.setState({editBookData})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"category"}>Category</Label>
                            <Input id={"category"} value={this.state.editBookData.category} onChange={(e) => {
                                let {editBookData} = this.state;

                                editBookData.category = e.target.value;

                                this.setState({editBookData})
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for={"isbn"}>ISBN</Label>
                            <Input id={"isbn"} value={this.state.editBookData.isbn} onChange={(e) => {
                                let {editBookData} = this.state;

                                editBookData.isbn = e.target.value;

                                this.setState({editBookData})
                            }}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {books}
                    </tbody>
                </Table>
            </div>
        );
    }
}


export default Pushing



