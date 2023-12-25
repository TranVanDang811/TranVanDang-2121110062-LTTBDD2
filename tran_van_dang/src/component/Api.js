import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: 10 }}>API Response:</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>Error: {error}</Text>}
      {data && (
        <View>
          {data.map((item, index) => (
            <View key={index}>
              <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default YourComponent;
