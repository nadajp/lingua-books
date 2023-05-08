import nextConnect from 'next-connect';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import Product from './model/product';

export const config = {
  api: {
    bodyParser: false
  }
}

const API_URL = 'http://localhost:8080/api/v1/products';
const upload = multer({ dest: '/tmp' });
const handler = nextConnect();
handler.use(upload.single('image'));

// POST /api/products
handler.post(async (req, res) => {
  console.log('Received fields:', req.body);
  console.log('Received file:', req.file);

  const product = new Product();
  product.setName(req.body.name);
  product.setPrice(req.body.price);
  product.setDescription(req.body.description);
  product.setLanguage(req.body.language);
  product.setAuthor(req.body.author);
  product.setCondition(req.body.condition);
  product.setCategoryId(req.body.categoryId);
  product.setSubcategoryId(req.body.subcategoryId);
  product.setPublisher(req.body.publisher);
  product.setPublicationYear(req.body.publicationYear);
  product.setIsbn(req.body.isbn);
  product.setLength(req.body.length);
  product.setFormat(req.body.format);
  product.setDimensionLength(req.body.dimensionLength);
  product.setDimensionWidth(req.body.dimensionWidth);
  product.setSellerId(1);

  const imagePath = req.file.path;
  const formData = new FormData();
  
  formData.append('image', fs.createReadStream(imagePath, { contentType: 'image/jpeg' }));
  formData.append('product', JSON.stringify(product), { contentType: 'application/json' });

  try {
    const headers = {
      'Content-Type': 'multipart/form-data'
    }

    const response = await axios.post(API_URL, formData, { headers });
    
    console.log('External API response:', response.data);
    res.status(200).json({ message: 'Form data processed successfully.' });
  } catch (error) {
      console.error('External API error:', error);
      res.status(500).json({ error: 'Internal server error.' });
  } finally {
      // Delete the temporary file from the file system
      fs.unlinkSync(imagePath);
  }
});

export default handler;