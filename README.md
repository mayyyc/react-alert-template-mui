# react-alert-template-mui

## Installation

npm install react-alert-template-mui

## Demo

https://codesandbox.io/s/elegant-khorana-up2ys?fontsize=14

## How to Use

### Simple alert

```javascript
alert.show("Oh look, an alert!");
```

### Alert with title

```javascript
alert.show("This is an alert with title!", {
  title: "Random Alert Title"
});
```

### Alert with extra actions

```javascript
alert.show("This is an alert with extra actions!", {
  title: "Alert with extra actions!",
  actions: (
    <Button
      onClick={() => {
        setAction("Actioned!");
      }}
    >
      Do Something
    </Button>
  )
});
```
