import Node from '../../Node';

describe('Node', () => {
  it('Constructor should build node instance', () => {
    let node = new Node(1, null, null);
    expect(node.value).toBeDefined();
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });
});