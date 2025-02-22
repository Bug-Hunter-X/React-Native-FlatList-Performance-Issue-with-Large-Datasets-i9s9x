The solution involves using a unique `keyExtractor` for the `FlatList` and performing optimized data updates. 
```javascript
import React, { useState, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const App = () => {
  const [data, setData] = useState(DATA);

  const memoizedData = useMemo(() => data, [data]); // Memoizing data for performance

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.text}</Text>
    </View>
  );

  const updateData = () => {
    // Simulate updating data
    const newData = data.map(item => ({...item, text: item.text + '!'}));
    setData(newData);
  };

  return (
    <View>
      <FlatList
        data={memoizedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Update Data" onPress={updateData} />
    </View>
  );
};

export default App;
```