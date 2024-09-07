/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { MaterialBom } from './MaterialBom';

/**
 * Request builder class for operations supported on the {@link MaterialBom} entity.
 */
export class MaterialBomRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialBom<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialBom` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialBom` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialBom<T>, T> {
    return new GetAllRequestBuilder<MaterialBom<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaterialBom` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialBom`.
   */
  create(entity: MaterialBom<T>): CreateRequestBuilder<MaterialBom<T>, T> {
    return new CreateRequestBuilder<MaterialBom<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaterialBom` entity based on its keys.
   * @param billOfMaterial Key property. See {@link MaterialBom.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBom.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBom.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBom.billOfMaterialVersion}.
   * @param engineeringChangeDocument Key property. See {@link MaterialBom.engineeringChangeDocument}.
   * @param material Key property. See {@link MaterialBom.material}.
   * @param plant Key property. See {@link MaterialBom.plant}.
   * @returns A request builder for creating requests to retrieve one `MaterialBom` entity based on its keys.
   */
  getByKey(
    billOfMaterial: DeserializedType<T, 'Edm.String'>,
    billOfMaterialCategory: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVariant: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVersion: DeserializedType<T, 'Edm.String'>,
    engineeringChangeDocument: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialBom<T>, T> {
    return new GetByKeyRequestBuilder<MaterialBom<T>, T>(this.entityApi, {
      BillOfMaterial: billOfMaterial,
      BillOfMaterialCategory: billOfMaterialCategory,
      BillOfMaterialVariant: billOfMaterialVariant,
      BillOfMaterialVersion: billOfMaterialVersion,
      EngineeringChangeDocument: engineeringChangeDocument,
      Material: material,
      Plant: plant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialBom`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialBom`.
   */
  update(entity: MaterialBom<T>): UpdateRequestBuilder<MaterialBom<T>, T> {
    return new UpdateRequestBuilder<MaterialBom<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialBom`.
   * @param billOfMaterial Key property. See {@link MaterialBom.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBom.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBom.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBom.billOfMaterialVersion}.
   * @param engineeringChangeDocument Key property. See {@link MaterialBom.engineeringChangeDocument}.
   * @param material Key property. See {@link MaterialBom.material}.
   * @param plant Key property. See {@link MaterialBom.plant}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBom`.
   */
  delete(
    billOfMaterial: string,
    billOfMaterialCategory: string,
    billOfMaterialVariant: string,
    billOfMaterialVersion: string,
    engineeringChangeDocument: string,
    material: string,
    plant: string
  ): DeleteRequestBuilder<MaterialBom<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialBom`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBom` by taking the entity as a parameter.
   */
  delete(entity: MaterialBom<T>): DeleteRequestBuilder<MaterialBom<T>, T>;
  delete(
    billOfMaterialOrEntity: any,
    billOfMaterialCategory?: string,
    billOfMaterialVariant?: string,
    billOfMaterialVersion?: string,
    engineeringChangeDocument?: string,
    material?: string,
    plant?: string
  ): DeleteRequestBuilder<MaterialBom<T>, T> {
    return new DeleteRequestBuilder<MaterialBom<T>, T>(
      this.entityApi,
      billOfMaterialOrEntity instanceof MaterialBom
        ? billOfMaterialOrEntity
        : {
            BillOfMaterial: billOfMaterialOrEntity!,
            BillOfMaterialCategory: billOfMaterialCategory!,
            BillOfMaterialVariant: billOfMaterialVariant!,
            BillOfMaterialVersion: billOfMaterialVersion!,
            EngineeringChangeDocument: engineeringChangeDocument!,
            Material: material!,
            Plant: plant!
          }
    );
  }
}
