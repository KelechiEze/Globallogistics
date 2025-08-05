// trackingData.ts
export interface TrackingItem {
  id: string;
  name: string;
  image: string;
  category: string;
  weight: string;
}

export interface TrackingStatus {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  location: string;
  completed: boolean;
}

export interface TrackingData {
  trackingNumber: string;
  status: string;
  estimatedDelivery: string;
  currentLocation: string;
  destination: string;
  service: string;
  items: TrackingItem[];
  timeline: TrackingStatus[];
}

const generateTimeline = (currentStage: number): TrackingStatus[] => [
  {
    id: '1',
    title: 'Order Received',
    description: 'Your order has been received and confirmed',
    timestamp: '2024-08-01T10:15:00Z',
    location: 'Processing Center - USA',
    completed: currentStage >= 1
  },
  {
    id: '2',
    title: 'Payment Confirmed',
    description: 'Payment has been processed successfully',
    timestamp: '2024-08-01T11:30:00Z',
    location: 'Processing Center - USA',
    completed: currentStage >= 2
  },
  {
    id: '3',
    title: 'Processing',
    description: 'Items are being prepared for shipment',
    timestamp: '2024-08-02T09:00:00Z',
    location: 'Fulfillment Center - USA',
    completed: currentStage >= 3
  },
  {
    id: '4',
    title: 'Shipped',
    description: 'Package has been shipped from our facility',
    timestamp: '2024-08-02T16:45:00Z',
    location: 'Distribution Hub - USA',
    completed: currentStage >= 4
  },
  {
    id: '5',
    title: 'In Transit',
    description: 'Package is on its way to destination',
    timestamp: '2024-08-04T08:30:00Z',
    location: 'International Hub - Dubai',
    completed: currentStage >= 5
  },
  {
    id: '6',
    title: 'Out for Delivery',
    description: 'Package is out for final delivery',
    timestamp: '2024-08-07T07:00:00Z',
    location: 'Lagos Distribution Center',
    completed: currentStage >= 6
  },
  {
    id: '7',
    title: 'Delivered',
    description: 'Package has been successfully delivered',
    timestamp: '2024-08-07T14:30:00Z',
    location: 'Lagos, Nigeria',
    completed: currentStage >= 7
  }
];

const getStatusFromStage = (stage: number): string => {
  switch (stage) {
    case 1: return 'Order Received';
    case 2: return 'Payment Confirmed';
    case 3: return 'Processing';
    case 4: return 'Shipped';
    case 5: return 'In Transit';
    case 6: return 'Out for Delivery';
    case 7: return 'Delivered';
    default: return 'Order Received';
  }
};

const getCurrentLocationFromStage = (stage: number): string => {
  switch (stage) {
    case 1:
    case 2: return 'Processing Center - USA';
    case 3: return 'Fulfillment Center - USA';
    case 4: return 'Distribution Hub - USA';
    case 5: return 'International Hub - Dubai';
    case 6: return 'Lagos Distribution Center';
    case 7: return 'Lagos, Nigeria';
    default: return 'Processing Center - USA';
  }
};

export const trackingDatabase: Record<string, TrackingData> = {
  'GS001234567': {
    trackingNumber: 'GS001234567',
    status: 'In Transit',
    estimatedDelivery: '2024-08-07 14:30',
    currentLocation: 'International Hub - Dubai',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.3 kg' },
      { id: '2', name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.2 kg' },
      { id: '3', name: 'Coffee Beans (Premium)', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop', category: 'Food', weight: '1.0 kg' },
      { id: '4', name: 'Designer Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', category: 'Fashion', weight: '0.1 kg' },
      { id: '5', name: 'Leather Wallet', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop', category: 'Fashion', weight: '0.2 kg' },
      { id: '6', name: 'Portable Speaker', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.8 kg' },
      { id: '7', name: 'Organic Tea Set', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop', category: 'Food', weight: '0.5 kg' },
      { id: '8', name: 'Travel Backpack', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'Accessories', weight: '1.2 kg' }
    ],
    timeline: generateTimeline(5)
  },

  'GS002345678': {
    trackingNumber: 'GS002345678',
    status: 'Out for Delivery',
    estimatedDelivery: '2024-08-06 16:00',
    currentLocation: 'Lagos Distribution Center',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Gaming Keyboard', image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.9 kg' },
      { id: '2', name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.2 kg' },
      { id: '3', name: 'Vintage Camera', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop', category: 'Electronics', weight: '1.5 kg' },
      { id: '4', name: 'Art Supplies Kit', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop', category: 'Art', weight: '0.8 kg' },
      { id: '5', name: 'Premium Notebook', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop', category: 'Stationery', weight: '0.3 kg' },
      { id: '6', name: 'Essential Oils Set', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop', category: 'Wellness', weight: '0.4 kg' },
      { id: '7', name: 'Ceramic Mug', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=300&fit=crop', category: 'Home', weight: '0.5 kg' },
      { id: '8', name: 'Bluetooth Earbuds', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.1 kg' }
    ],
    timeline: generateTimeline(6)
  },

  'GS003456789': {
    trackingNumber: 'GS003456789',
    status: 'Delivered',
    estimatedDelivery: '2024-08-05 13:45',
    currentLocation: 'Lagos, Nigeria',
    destination: 'Lagos, Nigeria',
    service: 'Standard International',
    items: [
      { id: '1', name: 'Smart Phone Case', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.1 kg' },
      { id: '2', name: 'Fitness Tracker', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.2 kg' },
      { id: '3', name: 'Yoga Mat', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop', category: 'Fitness', weight: '1.0 kg' },
      { id: '4', name: 'Water Bottle', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'Fitness', weight: '0.3 kg' },
      { id: '5', name: 'Protein Powder', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop', category: 'Fitness', weight: '1.2 kg' },
      { id: '6', name: 'Running Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', category: 'Fashion', weight: '0.8 kg' },
      { id: '7', name: 'Sports Towel', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop', category: 'Fitness', weight: '0.2 kg' },
      { id: '8', name: 'Energy Bars Pack', image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=300&h=300&fit=crop', category: 'Food', weight: '0.6 kg' }
    ],
    timeline: generateTimeline(7)
  },

  'GS004567890': {
    trackingNumber: 'GS004567890',
    status: 'Processing',
    estimatedDelivery: '2024-08-10 15:30',
    currentLocation: 'Fulfillment Center - USA',
    destination: 'Lagos, Nigeria',
    service: 'Standard International',
    items: [
      { id: '1', name: 'Books Collection', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', category: 'Books', weight: '2.0 kg' },
      { id: '2', name: 'Desk Lamp', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop', category: 'Home', weight: '1.1 kg' },
      { id: '3', name: 'Plant Pot', image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=300&h=300&fit=crop', category: 'Home', weight: '0.8 kg' },
      { id: '4', name: 'Candle Set', image: 'https://images.unsplash.com/photo-1602874801006-9a9b8fd437f0?w=300&h=300&fit=crop', category: 'Home', weight: '0.6 kg' },
      { id: '5', name: 'Picture Frame', image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=300&h=300&fit=crop', category: 'Home', weight: '0.4 kg' },
      { id: '6', name: 'Kitchen Scale', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop', category: 'Kitchen', weight: '1.3 kg' },
      { id: '7', name: 'Spice Rack', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop', category: 'Kitchen', weight: '0.9 kg' },
      { id: '8', name: 'Cutting Board', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop', category: 'Kitchen', weight: '0.7 kg' }
    ],
    timeline: generateTimeline(3)
  },

  'GS005678901': {
    trackingNumber: 'GS005678901',
    status: 'Shipped',
    estimatedDelivery: '2024-08-09 12:00',
    currentLocation: 'Distribution Hub - USA',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Designer Perfume', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop', category: 'Beauty', weight: '0.3 kg' },
      { id: '2', name: 'Skincare Set', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop', category: 'Beauty', weight: '0.5 kg' },
      { id: '3', name: 'Makeup Brushes', image: 'https://images.unsplash.com/photo-1583241800398-9b606bf1b41a?w=300&h=300&fit=crop', category: 'Beauty', weight: '0.2 kg' },
      { id: '4', name: 'Hair Dryer', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop', category: 'Beauty', weight: '1.2 kg' },
      { id: '5', name: 'Silk Scarf', image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=300&h=300&fit=crop', category: 'Fashion', weight: '0.1 kg' },
      { id: '6', name: 'Jewelry Box', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop', category: 'Fashion', weight: '0.4 kg' },
      { id: '7', name: 'Hand Mirror', image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=300&h=300&fit=crop', category: 'Beauty', weight: '0.3 kg' },
      { id: '8', name: 'Travel Organizer', image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=300&h=300&fit=crop', category: 'Accessories', weight: '0.6 kg' }
    ],
    timeline: generateTimeline(4)
  },

  'GS006789012': {
    trackingNumber: 'GS006789012',
    status: 'In Transit',
    estimatedDelivery: '2024-08-08 14:15',
    currentLocation: 'International Hub - Dubai',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Tablet Computer', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.7 kg' },
      { id: '2', name: 'Wireless Charger', image: 'https://images.unsplash.com/photo-1609592043114-e9b1e3d6fb36?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.3 kg' },
      { id: '3', name: 'Phone Stand', image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.2 kg' },
      { id: '4', name: 'Power Bank', image: 'https://images.unsplash.com/photo-1609592043114-e9b1e3d6fb36?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.5 kg' },
      { id: '5', name: 'USB Cable Set', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.3 kg' },
      { id: '6', name: 'Screen Protector', image: 'https://images.unsplash.com/photo-1616348536900-39734503ad98?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.1 kg' },
      { id: '7', name: 'Car Mount', image: 'https://images.unsplash.com/photo-1541728472741-03e45a58cf88?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.4 kg' },
      { id: '8', name: 'Bluetooth Adapter', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.1 kg' }
    ],
    timeline: generateTimeline(5)
  },

  'GS007890123': {
    trackingNumber: 'GS007890123',
    status: 'Payment Confirmed',
    estimatedDelivery: '2024-08-12 16:30',
    currentLocation: 'Processing Center - USA',
    destination: 'Lagos, Nigeria',
    service: 'Standard International',
    items: [
      { id: '1', name: 'Guitar Strings', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', category: 'Music', weight: '0.1 kg' },
      { id: '2', name: 'Music Stand', image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop', category: 'Music', weight: '1.8 kg' },
      { id: '3', name: 'Metronome', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', category: 'Music', weight: '0.4 kg' },
      { id: '4', name: 'Sheet Music', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', category: 'Music', weight: '0.2 kg' },
      { id: '5', name: 'Guitar Pick Set', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop', category: 'Music', weight: '0.1 kg' },
      { id: '6', name: 'Audio Cable', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', category: 'Music', weight: '0.3 kg' },
      { id: '7', name: 'Music Books', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', category: 'Books', weight: '1.2 kg' },
      { id: '8', name: 'Instrument Case', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'Music', weight: '2.1 kg' }
    ],
    timeline: generateTimeline(2)
  },

  'GS008901234': {
    trackingNumber: 'GS008901234',
    status: 'Out for Delivery',
    estimatedDelivery: '2024-08-06 11:45',
    currentLocation: 'Lagos Distribution Center',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Gaming Headset', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop', category: 'Gaming', weight: '0.6 kg' },
      { id: '2', name: 'Mouse Pad', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', category: 'Gaming', weight: '0.2 kg' },
      { id: '3', name: 'Gaming Chair Cushion', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop', category: 'Gaming', weight: '1.5 kg' },
      { id: '4', name: 'LED Strip Lights', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.3 kg' },
      { id: '5', name: 'Controller Stand', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop', category: 'Gaming', weight: '0.4 kg' },
      { id: '6', name: 'Cable Management Kit', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', category: 'Electronics', weight: '0.3 kg' },
      { id: '7', name: 'Desk Organizer', image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop', category: 'Office', weight: '0.5 kg' },
      { id: '8', name: 'Blue Light Glasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', category: 'Health', weight: '0.1 kg' }
    ],
    timeline: generateTimeline(6)
  },

  'GS009012345': {
    trackingNumber: 'GS009012345',
    status: 'Order Received',
    estimatedDelivery: '2024-08-15 17:00',
    currentLocation: 'Processing Center - USA',
    destination: 'Lagos, Nigeria',
    service: 'Standard International',
    items: [
      { id: '1', name: 'Baby Clothes Set', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop', category: 'Baby', weight: '0.3 kg' },
      { id: '2', name: 'Baby Toys', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', category: 'Baby', weight: '0.5 kg' },
      { id: '3', name: 'Baby Bottle Set', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'Baby', weight: '0.4 kg' },
      { id: '4', name: 'Baby Blanket', image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=300&h=300&fit=crop', category: 'Baby', weight: '0.6 kg' },
      { id: '5', name: 'Pacifier Set', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop', category: 'Baby', weight: '0.1 kg' },
      { id: '6', name: 'Baby Monitor', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop', category: 'Baby', weight: '0.8 kg' },
      { id: '7', name: 'Diaper Bag', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', category: 'Baby', weight: '0.9 kg' },
      { id: '8', name: 'Baby Bath Set', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop', category: 'Baby', weight: '0.7 kg' }
    ],
    timeline: generateTimeline(1)
  },

  'GS010123456': {
    trackingNumber: 'GS010123456',
    status: 'In Transit',
    estimatedDelivery: '2024-08-08 10:30',
    currentLocation: 'International Hub - Dubai',
    destination: 'Lagos, Nigeria',
    service: 'Express International',
    items: [
      { id: '1', name: 'Camping Tent', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=300&fit=crop', category: 'Outdoor', weight: '3.2 kg' },
      { id: '2', name: 'Sleeping Bag', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=300&fit=crop', category: 'Outdoor', weight: '1.8 kg' },
      { id: '3', name: 'Camping Stove', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=300&fit=crop', category: 'Outdoor', weight: '2.1 kg' },
      { id: '4', name: 'Flashlight', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop', category: 'Outdoor', weight: '0.4 kg' },
      { id: '5', name: 'Multi-tool', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=300&fit=crop', category: 'Tools', weight: '0.3 kg' },
      { id: '6', name: 'Water Filter', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop', category: 'Outdoor', weight: '0.5 kg' },
      { id: '7', name: 'Compass', image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=300&h=300&fit=crop', category: 'Outdoor', weight: '0.2 kg' },
      { id: '8', name: 'First Aid Kit', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop', category: 'Safety', weight: '0.8 kg' }
    ],
    timeline: generateTimeline(5)
  }
};

// Function to update tracking status by stage
export const updateTrackingStatus = (trackingNumber: string, stage: number) => {
  if (!trackingDatabase[trackingNumber]) {
    console.error(`Tracking number ${trackingNumber} not found`);
    return;
  }

  if (stage < 1 || stage > 7) {
    console.error('Stage must be between 1 and 7');
    return;
  }

  const newStatus = getStatusFromStage(stage);
  const newLocation = getCurrentLocationFromStage(stage);
  
  trackingDatabase[trackingNumber] = {
    ...trackingDatabase[trackingNumber],
    status: newStatus,
    currentLocation: newLocation,
    timeline: generateTimeline(stage)
  };

  console.log(`Updated tracking ${trackingNumber} to stage ${stage} (${newStatus})`);
};

// Initialize all tracking data with their current stages
Object.keys(trackingDatabase).forEach(trackingNumber => {
  const currentStatus = trackingDatabase[trackingNumber].status;
  let currentStage = 1;
  if (currentStatus === 'Payment Confirmed') currentStage = 2;
  if (currentStatus === 'Processing') currentStage = 3;
  if (currentStatus === 'Shipped') currentStage = 4;
  if (currentStatus === 'In Transit') currentStage = 5;
  if (currentStatus === 'Out for Delivery') currentStage = 6;
  if (currentStatus === 'Delivered') currentStage = 7;
  
  trackingDatabase[trackingNumber].timeline = generateTimeline(currentStage);
});