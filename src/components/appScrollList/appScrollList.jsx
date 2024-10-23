import InfiniteLoader from "react-window-infinite-loader";
import { VariableSizeList } from "react-window";
import React, { useEffect, useRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import PropTypes from "prop-types";
function AppScrollList({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage,
  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading,
  // Array of items loaded so far.
  items,
  // Callback function responsible for loading the next page of items.
  loadNextPage,
  sortOrder,
  children
}) {
  const infiniteLoaderRef = useRef(null);
  const hasMountedRef = useRef(false);

  // 每次 sort prop 改变时，我们都会调用方法 resetloadMoreItemsCache 来清除缓存
  useEffect(() => {
    // 只需要在“sortOrder”改变时重置缓存的项目。
    // 此效果也会在挂载时运行；在这种情况下无需重置。
    if (hasMountedRef.current) {
      if (infiniteLoaderRef.current) {
        infiniteLoaderRef.current.resetloadMoreItemsCache();
      }
    }
    hasMountedRef.current = true;
  }, [sortOrder]);
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length;

  // 设置每项 的 高度，除非 数据 中有 height 高度的字段 不然 这里 动态不了高度 ， 写死高度也行
  // eslint-disable-next-line no-unused-vars
  const getItemSize = _ => {
    return 200;
  };
  // itemCount 决定 每次显示多少个 数
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <InfiniteLoader
            ref={infiniteLoaderRef}
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => {
              return (
                <VariableSizeList
                  itemSize={getItemSize}
                  itemCount={itemCount}
                  width={width}
                  height={height}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                  layout="vertical"
                >
                  {({ index, style }) => {
                    let content;
                    console.log(index, style);
                    if (!isItemLoaded(index)) {
                      content = "Loading...";
                      return <div style={style}>{content}</div>;
                    }
                    return (
                      <div style={style}>
                        {children({ index, style, item: items[index] })}
                      </div>
                    );
                  }}
                </VariableSizeList>
              );
            }}
          </InfiniteLoader>
        );
      }}
    </AutoSizer>
  );
}
AppScrollList.propTypes = {
  hasNextPage: PropTypes.bool,
  loadNextPage: PropTypes.func,
  isNextPageLoading: PropTypes.bool,
  sortOrder: PropTypes.bool,
  items: PropTypes.any,
  children: PropTypes.func.isRequired
};

export default AppScrollList;
