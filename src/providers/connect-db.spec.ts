import { Test, TestingModule } from "@nestjs/testing";
import { ConnectDb } from "./connect.providers";

describe("ConnectDb", () => {
  let provider: ConnectDb;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectDb],
    }).compile();

    provider = module.get<ConnectDb>(ConnectDb);
  });

  it("should be defined", () => {
    expect(provider).toBeDefined();
  });
});
