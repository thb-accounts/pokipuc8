import { db } from '@/lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

// Stock data for each item
const stockData = [
  { item_id: 'gaming-chair', total_stock: 50, remaining_stock: 50 },
  { item_id: 'gaming-headset', total_stock: 100, remaining_stock: 100 },
  { item_id: 'gaming-keyboard', total_stock: 75, remaining_stock: 75 },
  { item_id: 'gaming-mouse', total_stock: 150, remaining_stock: 150 },
  { item_id: 'robux-currency', total_stock: 1000, remaining_stock: 1000 },
  { item_id: 'bell-cafe-cookie', total_stock: 200, remaining_stock: 200 },
];

export const setupInitialStock = async () => {
  try {
    console.log('Setting up initial stock data...');
    
    for (const stock of stockData) {
      const docRef = doc(collection(db, 'item_stock'), stock.item_id);
      await setDoc(docRef, stock);
      console.log(`Added stock for ${stock.item_id}`);
    }
    
    console.log('Initial stock setup complete!');
  } catch (error) {
    console.error('Error setting up stock:', error);
  }
};

// Uncomment the line below and run this file to setup stock
// setupInitialStock();