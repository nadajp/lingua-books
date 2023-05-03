import Bookstore from "src/components/bookstore";

export default function Home() {
  const books = [
    {
      id: 1,
      title: 'Horror Vacuil',
      author: 'Stasa Aras',
      price: 9.99,
      condition: 'Used - Like New',
      imageUrl: '/Bookshop/HorrorVacui.jpg',
      publisher: 'Verbarij',
      year: 1925,
      format: 'Paperback',
      length: 180,
      language: 'Croatian',
    },
    {
      id: 2,
      title: 'Ovdje Fali Zenska Ruka',
      author: 'Edi Matic',
      price: 12.99,
      condition: 'Used - Good',
      imageUrl: '/Bookshop/OvdjeFali.jpg',
      publisher: 'Znanje',
      year: 1960,
      format: 'Hardcover',
      length: 336,
      language: 'Croatian',
    },
    {
      id: 3,
      title: 'Zasto Sam Vam Lagala',
      author: 'Julijana Matanovic',
      price: 12.99,
      condition: 'Used - Like New',
      imageUrl: '/Bookshop/zasto_sam_vam_lagala.jpg',
      publisher: 'Znanje',
      year: 1960,
      format: 'Paperback',
      length: 336,
      language: 'Croatian',
    },
    {
      id: 4,
      title: 'Zasto Sam Vam Lagala',
      author: 'Julijana Matanovic',
      price: 12.99,
      condition: 'Used - Like New',
      imageUrl: '/Bookshop/zasto_sam_vam_lagala.jpg',
      publisher: 'Znanje',
      year: 1960,
      format: 'Paperback',
      length: 336,
      language: 'Croatian',
    },
    {
      id: 5,
      title: 'Zasto Sam Vam Lagala',
      author: 'Julijana Matanovic',
      price: 12.99,
      condition: 'Used - Like New',
      imageUrl: '/Bookshop/zasto_sam_vam_lagala.jpg',
      publisher: 'Znanje',
      year: 1960,
      format: 'Paperback',
      length: 336,
      language: 'Croatian',
    },
  ];
  return (
   <Bookstore books = {books} />
  )
}

