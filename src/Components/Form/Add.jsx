import React, { useState, useEffect } from 'react';
import Data from './Data';
import ProductList from './ProductList';

export default function Add() {
    const [formData, setFormData] = useState({
        name: '',
        nameCategory: 'Áo không đẹp',
        code: '',
        image: '',
        imagePreview: '',
        price: '',
        oldPrice: ''
    });
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            const initialProducts = Data("products");
            setProducts(initialProducts);
            localStorage.setItem("products", JSON.stringify(initialProducts));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setFormData(prevData => ({ ...prevData, image: preview, imagePreview: preview }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            ...formData,
            image: formData.image || "https://via.placeholder.com/150"
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        setFormData({
            name: '',
            nameCategory: 'Thời trang nam',
            code: '',
            image: '',
            imagePreview: '',
            price: '',
            oldPrice: ''
        });
        setShowForm(false);
    };

    const toggleForm = () => setShowForm(prev => !prev);

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success">Quản lý sản phẩm</h2>
                <button
                    onClick={toggleForm}
                    className="btn btn-warning text-white fw-bold"
                >
                    {showForm ? 'Đóng ' : 'Thêm Sản Phẩm'}
                </button>
            </div>

            <div className="row">
                {showForm && (
                    <div className="col-md-5 mb-4">
                        <div className="card shadow-sm border-success">
                            <div className="card-header bg-success text-white">
                                <h5 className="mb-0">Thêm sản phẩm mới</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='name'>Tên sản phẩm</label>
                                            <input
                                                className='form-control'
                                                id="name"
                                                name='name'
                                                value={formData.name}
                                                placeholder='Tên sản phẩm'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='nameCategory'>Danh mục</label>
                                            <select
                                                className='form-control'
                                                id="nameCategory"
                                                name='nameCategory'
                                                value={formData.nameCategory}
                                                onChange={handleChange}
                                            >
                                                <option value="Thời trang nam">Nam</option>
                                                <option value="Thời trang nữ">Nữ</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='code'>Mã sản phẩm</label>
                                            <input
                                                className='form-control'
                                                id="code"
                                                name='code'
                                                value={formData.code}
                                                placeholder='Mã'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='price'>Giá</label>
                                            <input
                                                className='form-control'
                                                id="price"
                                                name='price'
                                                value={formData.price}
                                                placeholder='Giá'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='oldPrice'>Giá cộ</label>
                                            <input
                                                className='form-control'
                                                id="oldPrice"
                                                name='oldPrice'
                                                value={formData.oldPrice}
                                                placeholder='Giá gốc'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor='image'>Hình ảnh</label>
                                            <input
                                                type='file'
                                                className='form-control'
                                                id="image"
                                                name='image'
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>

                                    {formData.imagePreview && (
                                        <div className="text-center mb-3">
                                            <img
                                                src={formData.imagePreview}
                                                alt="Preview"
                                                className="img-fluid rounded border"
                                                style={{ height: "200px", objectFit: "cover" }}
                                            />
                                        </div>
                                    )}

                                    <div className="d-grid">
                                        <button
                                            type='submit'
                                            className="btn btn-success"
                                        >
                                            Lưu sản phẩm
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                <div className={showForm ? "col-md-7" : "col-12"}>
                    <h4 className="text-success mb-3">Danh sách sản phẩm</h4>
                    <ProductList products={products} />
                </div>
            </div>
        </div>
    );
}
