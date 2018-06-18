import * as superagent from 'superagent';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as React from 'react';

interface IState {
    isModalOpen: boolean;
}

class AddProduct extends React.Component<{}, IState>{
    public state : Readonly<IState> = {
        isModalOpen: false
    };
    private titleInput: HTMLInputElement;
    private descriptionInput: HTMLTextAreaElement;
    private priceInput: HTMLInputElement;
    private imgUrlInput: HTMLInputElement;
    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputValue = {
            title: this.titleInput.value,
            price: this.priceInput.value,
            description: this.descriptionInput.value,
            imageUrl: this.imgUrlInput.value
        };
        superagent
            .post('http://5b209234ca762000147b254f.mockapi.io/products')
            .send(inputValue)
            .set('accept', 'json')
            .end(() => {
                this.setState({
                    isModalOpen: true
                });
            });
    }
    public setTitleInput = (el: HTMLInputElement) => {
        this.titleInput = el;
        console.log(this.titleInput);
    }

    public setDescriptionEl = (el: HTMLTextAreaElement) => {
        this.descriptionInput = el;
    }

    public setPriceEl = (el: HTMLInputElement) => {
        this.priceInput = el;
    }

    public setImageUrlEl = (el: HTMLInputElement) => {
        this.imgUrlInput = el;
    }

    public closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

    public getModal = () => {
        return (
            <Modal isOpen={this.state.isModalOpen}>
                <ModalHeader>
                    Message
                </ModalHeader>
                <ModalBody>
                    Product Added
                </ModalBody>
                <ModalFooter>
                    <button 
                        onClick={this.closeModal}
                        className="btn btn-default">
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        )
    }

    public render(){        
        return (
            <div className="row">
                <div className="col">
                    {this.getModal()}
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input ref={this.setTitleInput} className="form-control" name="title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea ref={this.setDescriptionEl}  rows={5} className="form-control" name="description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input 
                                type="number"
                                className="form-control" 
                                name="price"
                                ref={this.setPriceEl}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imgUrl">Image Url</label>
                            <input 
                                className="form-control" 
                                name="imgUrl"
                                ref={this.setImageUrlEl}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;