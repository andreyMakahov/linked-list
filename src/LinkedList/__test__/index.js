import LinkedList from '../../LinkedList';

describe('LinkedList', () => {
  let list;

  beforeEach(function() {
    list = new LinkedList();

    list.head = {
      value: 1,
      prev: null,
    };

    list.tail = {
      value: 2,
      next: null,
    };

    list.head.next = list.tail;
    list.tail.prev = list.head;

    list.length = 1;
  });

  it('Constructor should build LinkedList instance', () => {
    expect(list.head).toBeDefined();
    expect(list.tail).toBeDefined();
    expect(list.length).toBe(1);
  });

  it('AddToHead should add node to the beginning of linked list', () => {
    list.addToHead(3);

    expect(list.head).toBeDefined();
    expect(list.head.value).toBe(3);

    expect(list.tail.value).toBe(2);

    expect(list.length).toBe(2);
  });

  it('AddToTail should add node to the ending of linked list', () => {
    list.addToTail(3);

    expect(list.head).toBeDefined();
    expect(list.head.value).toBe(1);

    expect(list.tail.value).toBe(3);

    expect(list.length).toBe(2);
  });

  it('Clear should delete all nodes from linked list', () => {
    list.clear();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  it('Contains should check is value in linked list', () => {
    expect(list.contains(1)).toBe(true);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(3)).toBe(false);
  });

  it('Contains should check is value in linked list', () => {
    expect(list.contains(1)).toBe(true);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(3)).toBe(false);
  });

  it('Get should return node by index', () => {
    expect(list.get(0)).toBe(1);
  });

});