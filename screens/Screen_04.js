import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

export default function ProductScreen({ navigation }) {
  // Thông tin sản phẩm mẫu
  const product = {
    name: 'Product name',
    price: 2.99,
    rating: 4.5,
    images: [
      require('../assets/DATA/Image 7 (1).png'),
      require('../assets/DATA/Image 7 (2).png'),
      require('../assets/DATA/Image 7.png'),
      require('../assets/DATA/Image 7 (4).png'),
    ]
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(2);
  const [selectedImage, setSelectedImage] = useState(product.images[2]);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Tên sản phẩm */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Hình ảnh sản phẩm lớn */}
      <Image source={selectedImage} style={styles.productImage} />

      {/* Danh sách hình ảnh nhỏ */}
      <FlatList
        data={product.images}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedImage(item)}>
            <Image source={item} style={styles.thumbnailImage} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.imageList}
      />

      {/* Giá sản phẩm */}
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.promo}>Buy 1 get 1</Text>

      {/* Đánh giá sao */}
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{product.rating}</Text>
        <Image source={require('../assets/DATA/Rating 3.png')} style={styles.starIcon} />
      </View>

      {/* Kích thước */}
      <View style={styles.sizeContainer}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[styles.sizeBox, selectedSize === size && styles.selectedSizeBox]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Số lượng */}
      <View style={styles.quantityContainer}>
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrement')}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increment')}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tổng giá */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>${(product.price * quantity).toFixed(2)}</Text>
      </View>

      {/* Size guide và Reviews */}
      <TouchableOpacity style={styles.guideButton}>
        <Text style={styles.guideText}>Size guide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reviewsButton}>
        <Text style={styles.reviewsText}>Reviews (99)</Text>
      </TouchableOpacity>

      {/* Nút thêm vào giỏ hàng */}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  imageList: {
    marginBottom: 20,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00CFFF',
  },
  promo: {
    color: '#FF5A5A',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 18,
    marginRight: 5,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  sizeContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  sizes: {
    flexDirection: 'row',
  },
  sizeBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  selectedSizeBox: {
    borderColor: '#00CFFF',
    backgroundColor: '#00CFFF',
  },
  sizeText: {
    fontSize: 16,
    color: '#333',
  },
  selectedSizeText: {
    color: '#fff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 24,
    padding: 10,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  guideButton: {
    marginBottom: 10,
  },
  guideText: {
    fontSize: 16,
    color: '#00CFFF',
  },
  reviewsButton: {
    marginBottom: 20,
  },
  reviewsText: {
    fontSize: 16,
    color: '#00CFFF',
  },
  addToCartButton: {
    backgroundColor: '#00CFFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
