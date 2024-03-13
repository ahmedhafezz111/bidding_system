import React, { useState } from 'react';
import OpenAI from 'openai';

const Contact = () => {
  const [description, setDescription] = useState('');
  const [seedWords, setSeedWords] = useState('');
  const [generatedProduct, setGeneratedProduct] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [startPrice , setStartPrice] = useState('');
  const [file, setFile] = useState('');

  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You will be provided with a product description and seed words, and your task is to generate product names.',
          },
          {
            role: 'user',
            content: `Product description: ${description}\nSeed words: ${seedWords}`,
          },
        ],
        temperature: 0.8,
        max_tokens: 64,
        top_p: 1,
      });
      setGeneratedProduct(response.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    // Set the product name, description, and start price
    setProductName(e.target.productName.value);
    setProductDescription(e.target.productDescription.value);
    setStartPrice(Number(e.target.startPrice.value));
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  

  return (
    <>
      <section className='userInputform'>
        <div className="container px-5">
          <h2>Product Name Generator</h2>
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className='mt-3'>
                  <label htmlFor="Description" className="form-label">Description</label>
                  <input type="text" className="form-control w-50 " id="Description" placeholder="Description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='mt-3'>
                  <label htmlFor="seedWords" className="form-label">Seed Words</label>
                  <input type="text" placeholder="Seed Words..." className="form-control w-50" id="seedWords"  value={seedWords} onChange={(e) => setSeedWords(e.target.value)} />
                </div>
                <button className='btn btn-success mt-3' type="submit" disabled={!description || !seedWords || isLoading}>
                  {isLoading ? 'Generating...' : 'Generate'}
                </button>
              </form>
              {generatedProduct && (
                <div>
                  <h3>Generated Product Name:</h3>
                  <p>{generatedProduct}</p>
                </div>
              )}
              <form onSubmit={(e) => { handleProductSubmit(e); handleChange(e); }}>
                <div className='mt-3'>
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  <input type="text" placeholder="Product Name..." className="form-control w-50" id="productName"  />
                </div>
                <div className='mt-3'>
                  <label htmlFor="productDescription" className="form-label">Product Description</label>
                  <input type="text" placeholder="Product Description..." className="form-control w-50" id="productDescription"  />
                </div>
                <div className='mt-3'>
                  <label htmlFor="startPrice" className="form-label">Product Start Price</label>
                  <input type="number" placeholder="Product Start Price..." className="form-control w-50" id="startPrice"  />
                </div>
                <div className="mt-1">
                  <label htmlFor="productImg" className="form-label">Product Image</label>
                  <input type="file" className='form-control' onChange={(e) => handleChange(e)} />
                </div>
                <button className='btn btn-primary mt-3' type="submit">Submit</button>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img src={file} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{productName}</h5>
                  <p className="card-text">{productDescription}</p>
                  <p className="card-text">Start Price: ${startPrice}</p>
                  <a href="#" className="btn btn-primary">Start Bidding</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
